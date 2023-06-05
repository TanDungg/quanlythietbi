import React, { useState, useEffect } from "react";
import {
    SaveOutlined,
    StepBackwardFilled,
} from "@ant-design/icons";
import { Button } from "antd";
import "./styles.css";

const EditDeviceForm = ({ device, handleUpdateDevice, handleCancelUpdate }) => {
    const [newDevice, setNewDevice] = useState("");
    const [newDeviceType, setNewDeviceType] = useState("");
    const [newDeviceLocation, setNewDeviceLocation] = useState("");
    const [newDeviceBrand, setNewDeviceBrand] = useState("");
    const [errorFields, setErrorFields] = useState([]);
    const [isEditingMode, setIsEditingMode] = useState(false);

    useEffect(() => {
        setNewDevice(device.name);
        setNewDeviceType(device.type);
        setNewDeviceLocation(device.location);
        setNewDeviceBrand(device.brand);
        setIsEditingMode(true);
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
        const errorFields = [];

        if (!newDevice) {
            errorFields.push("newDevice");
        }

        if (!newDeviceType) {
            errorFields.push("newDeviceType");
        }

        if (!newDeviceLocation) {
            errorFields.push("newDeviceLocation");
        }

        if (!newDeviceBrand) {
            errorFields.push("newDeviceBrand");
        }

        if (errorFields.length === 0) {
            const updatedDevice = {
                ...device,
                name: newDevice,
                type: newDeviceType,
                location: newDeviceLocation,
                brand: newDeviceBrand,
            };
            handleUpdateDevice(updatedDevice);
            setIsEditingMode(false); // Chuyển sang chế độ không chỉnh sửa
        } else {
            setErrorFields(errorFields);
        }
    };

    const handleCancelClick = () => {
        handleCancelUpdate();
        setIsEditingMode(false); // Chuyển sang chế độ không chỉnh sửa
    };

    if (!isEditingMode) {
        return null; // Trả về null khi không trong chế độ chỉnh sửa
    }

    return (
        <div className="edit-device-form">
            <div className="form-title">
                <label>Chỉnh sửa thông tin {device.name}</label>
            </div>
            <div className="add-form">
                <div className="input-container">
                    <label className="label">Tên thiết bị:</label>
                    <input
                        type="text"
                        value={newDevice}
                        onChange={handleChangeInput}
                        placeholder="Tên thiết bị"
                        className={`input-ten ${errorFields.includes("newDevice") ? "error-input" : ""}`}
                    />
                    <label className="label">Loại:</label>
                    <input
                        type="text"
                        value={newDeviceType}
                        onChange={handleChangeTypeInput}
                        placeholder="Loại"
                        className={`input-loai ${errorFields.includes("newDeviceType") ? "error-input" : ""}`}
                    />
                </div>
                <div className="input-container">
                    <label className="label">Vị trí:</label>
                    <input
                        type="text"
                        value={newDeviceLocation}
                        onChange={handleChangeLocationInput}
                        placeholder="Vị trí"
                        className={`input-vitri ${errorFields.includes("newDeviceLocation") ? "error-input" : ""}`}
                    />
                    <label className="label">Hãng:</label>
                    <input
                        type="text"
                        value={newDeviceBrand}
                        onChange={handleChangeBrandInput}
                        placeholder="Hãng"
                        className={`input-hang ${errorFields.includes("newDeviceBrand") ? "error-input" : ""}`}
                    />
                </div>
                <div className="button-group">
                    <Button
                        type="primary"
                        icon={<SaveOutlined />}
                        className="add-btn"
                        onClick={handleUpdateClick}
                    >
                        Cập nhật
                    </Button>
                    <Button
                        type="primary"
                        icon={<StepBackwardFilled />}
                        className="add-btn"
                        onClick={handleCancelClick}
                    >
                        Quay lại
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EditDeviceForm;
