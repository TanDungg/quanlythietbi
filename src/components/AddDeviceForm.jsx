import React, { useState } from "react";

const AddDeviceForm = ({ handleAddDevice }) => {
    const [newDevice, setNewDevice] = useState("");
    const [newDeviceType, setNewDeviceType] = useState("");
    const [newDeviceLocation, setNewDeviceLocation] = useState("");
    const [newDeviceBrand, setNewDeviceBrand] = useState("");

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

    const handleAddClick = () => {
        const device = {
            name: newDevice,
            type: newDeviceType,
            location: newDeviceLocation,
            brand: newDeviceBrand
        };
        handleAddDevice(device);
        setNewDevice("");
        setNewDeviceType("");
        setNewDeviceLocation("");
        setNewDeviceBrand("");
    };

    return (
        <div>
            <div>THÊM THIẾT BỊ</div>
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
                <button className="add-btn" onClick={handleAddClick}>
                    Thêm
                </button>
            </div>
        </div>
    );
};

export default AddDeviceForm;
