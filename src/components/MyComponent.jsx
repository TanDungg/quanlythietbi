import React, { useState } from "react";
import AddDeviceForm from "./AddDeviceForm";
import EditDeviceForm from "./EditDeviceForm";

const MyComponent = () => {
    const [listDevices, setListDevices] = useState([
        { id: 1, name: "Thiết bị 1", type: "Loại 1", location: "Vị trí 1", brand: "Hãng 1" },
        { id: 2, name: "Thiết bị 2", type: "Loại 2", location: "Vị trí 2", brand: "Hãng 2" }
    ]);
    const [editMode, setEditMode] = useState(false);
    const [editDevice, setEditDevice] = useState(null);
    const [deleteMode, setDeleteMode] = useState(false);
    const [deleteDevice, setDeleteDevice] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddDevice = (device) => {
        const newId = listDevices.length > 0 ? listDevices[listDevices.length - 1].id + 1 : 1;
        const newDevice = { id: newId, ...device };
        setListDevices([...listDevices, newDevice]);
        setShowAddForm(false);
    };

    const handleEditDevice = (device) => {
        setEditMode(true);
        setEditDevice(device);
    };

    const handleUpdateDevice = (updatedDevice) => {
        const updatedDevices = listDevices.map((device) => {
            if (device.id === updatedDevice.id) {
                return updatedDevice;
            }
            return device;
        });
        setListDevices(updatedDevices);
        setEditMode(false);
        setEditDevice(null);
    };

    const handleDeleteDevice = (device) => {
        setDeleteMode(true);
        setDeleteDevice(device);
    };

    const handleConfirmDelete = () => {
        const updatedDevices = listDevices.filter((device) => device.id !== deleteDevice.id);
        setListDevices(updatedDevices);
        setDeleteMode(false);
        setDeleteDevice(null);
    };

    const handleCancelDelete = () => {
        setDeleteMode(false);
        setDeleteDevice(null);
    };

    const handleCancelUpdate = () => {
        setEditMode(false);
        setEditDevice(null);
    };

    return (
        <div>
            <div>QUẢN LÝ THIẾT BỊ</div>
            {editMode ? (
                <EditDeviceForm
                    device={editDevice}
                    handleUpdateDevice={handleUpdateDevice}
                    handleCancelUpdate={handleCancelUpdate}
                />
            ) : (
                <>
                    {showAddForm && (
                        <AddDeviceForm handleAddDevice={handleAddDevice} handleCancel={() => setShowAddForm(false)} />
                    )}
                    {!showAddForm && (
                        <button className="add-btn" onClick={() => setShowAddForm(true)}>
                            Thêm
                        </button>
                    )}
                </>
            )}
            <div className="device-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên thiết bị</th>
                            <th>Loại</th>
                            <th>Vị trí</th>
                            <th>Hãng</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listDevices.map((device) => (
                            <tr key={device.id}>
                                <td>{device.id}</td>
                                <td>{device.name}</td>
                                <td>{device.type}</td>
                                <td>{device.location}</td>
                                <td>{device.brand}</td>
                                <td>
                                    {deleteMode && deleteDevice && deleteDevice.id === device.id ? (
                                        <>
                                            <button className="confirm-delete-btn" onClick={handleConfirmDelete}>
                                                Xác nhận
                                            </button>
                                            <button className="cancel-delete-btn" onClick={handleCancelDelete}>
                                                Hủy
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="edit-btn" onClick={() => handleEditDevice(device)}>
                                                Sửa
                                            </button>
                                            <button className="delete-btn" onClick={() => handleDeleteDevice(device)}>
                                                Xóa
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyComponent;
