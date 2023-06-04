import React, { useState, useEffect } from "react";

const EditDeviceForm = ({ device, handleUpdateDevice, handleCancelUpdate }) => {
    const [newDevice, setNewDevice] = useState("");
    const [newDeviceType, setNewDeviceType] = useState("");
    const [newDeviceLocation, setNewDeviceLocation] = useState("");
    const [newDeviceBrand, setNewDeviceBrand] = useState("");

    useEffect(() => {
        setNewDevice(device.name);
        setNewDeviceType(device.type);
        setNewDeviceLocation(device.location);
        setNewDeviceBrand(device.brand);
    }, [device]);

    const handleChangeInput = (event) => {
        setNewDevice(event.target.value);
    };

    const handleChangeTypeInput = (event) => {
        setNewDeviceType(event.target.value);
    };

    const handleChangeLocationInput = (event) => {
        setNewDeviceLocation(event.target.value);
    };

    const handleChangeBrandInput = (event) => {
        setNewDeviceBrand(event.target.value);
    };

    const handleUpdateClick = () => {
        const updatedDevice = {
            ...device,
            name: newDevice,
            type: newDeviceType,
            location: newDeviceLocation,
            brand: newDeviceBrand
        };
        handleUpdateDevice(updatedDevice);
        handleCancelUpdate();
    };

    return (
        <div>
            <div>SỬA THIẾT BỊ</div>
            <div>
                <input
                    type="text"
                    value={newDevice}
                    onChange={handleChangeInput}
                    placeholder="Tên thiết bị"
                    className="input-ten"
                />
                <input
                    type="text"
                    value={newDeviceType}
                    onChange={handleChangeTypeInput}
                    placeholder="Loại"
                    className="input-loai"
                />
                <input
                    type="text"
                    value={newDeviceLocation}
                    onChange={handleChangeLocationInput}
                    placeholder="Vị trí"
                    className="input-vitri"
                />
                <input
                    type="text"
                    value={newDeviceBrand}
                    onChange={handleChangeBrandInput}
                    placeholder="Hãng"
                    className="input-hang"
                />
                <br />
                <button className="update-btn" onClick={handleUpdateClick}>
                    Cập nhật
                </button>
                <button className="cancel-btn" onClick={handleCancelUpdate}>
                    Hủy
                </button>
            </div>
        </div>
    );
};

export default EditDeviceForm;
