import React, { useState } from "react";
import AddDeviceForm from "./AddDeviceForm";
import EditDeviceForm from "./EditDeviceForm";
import {
    PlusOutlined,
    DeleteOutlined,
    EditOutlined,
    CloseOutlined,
    CheckOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import "./styles.css";

const MyComponent = () => {
    const [listDevices, setListDevices] = useState([
        {
            id: 1,
            name: "Máy tính bàn",
            type: "PC",
            location: "Phòng CNTT",
            brand: "DELL",
        },
        {
            id: 2,
            name: "Laptop Dell",
            type: "Laptop",
            location: "Phòng CNTT",
            brand: "DELL",
        },
        {
            id: 3,
            name: "Laptop HP",
            type: "Laptop",
            location: "Nhà máy khuôn",
            brand: "HP",
        },
    ]);
    const [editMode, setEditMode] = useState(false);
    const [editDevice, setEditDevice] = useState(null);
    const [deleteMode, setDeleteMode] = useState(false);
    const [deleteDevice, setDeleteDevice] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddDevice = (device) => {
        const newId =
            listDevices.length > 0 ? listDevices[listDevices.length - 1].id + 1 : 1;
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
        const updatedDevices = listDevices.filter(
            (device) => device.id !== deleteDevice.id
        );
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
        <main className="device-main">
            <div className="add-btn-container">
                {editMode ? (
                    <EditDeviceForm
                        device={editDevice}
                        handleUpdateDevice={handleUpdateDevice}
                        handleCancelUpdate={handleCancelUpdate}
                    />
                ) : (
                    <>
                        {!showAddForm ? (
                            <div className="add-btn-container">
                                <Button
                                    type="primary"
                                    icon={<PlusOutlined />}
                                    onClick={() => setShowAddForm(true)}
                                    className="add-btn"
                                >
                                    Thêm mới
                                </Button>
                            </div>
                        ) : (
                            <AddDeviceForm
                                handleAddDevice={handleAddDevice}
                                handleCancel={() => setShowAddForm(false)}
                            />
                        )}
                    </>
                )}
            </div>
            <div className="device-details">
                <table className="device-details-table">
                    <thead className="thead">
                        <tr>
                            <th>ID</th>
                            <th>Tên thiết bị</th>
                            <th>Loại</th>
                            <th>Vị trí</th>
                            <th>Hãng</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {listDevices.map((device) => (
                            <tr key={device.id}>
                                <td>{device.id}</td>
                                <td>{device.name}</td>
                                <td>{device.type}</td>
                                <td>{device.location}</td>
                                <td>{device.brand}</td>
                                <td className="icon-btn">
                                    {deleteMode &&
                                        deleteDevice &&
                                        deleteDevice.id === device.id ? (
                                        <>
                                            {
                                                <CheckOutlined
                                                    style={{ color: "green" }}
                                                    onClick={handleConfirmDelete}
                                                    className="yes-icon"
                                                />
                                            }
                                            |
                                            {
                                                <CloseOutlined
                                                    style={{ color: "red" }}
                                                    onClick={handleCancelDelete}
                                                    className="no-icon"
                                                />
                                            }
                                        </>
                                    ) : (
                                        <>
                                            {
                                                <EditOutlined
                                                    style={{ color: "blue" }}
                                                    onClick={() => handleEditDevice(device)}
                                                    className="edit-icon"
                                                />
                                            }
                                            |
                                            {
                                                <DeleteOutlined
                                                    style={{ color: "red" }}
                                                    onClick={() => handleDeleteDevice(device)}
                                                    className="delete-icon"
                                                />
                                            }
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default MyComponent;
