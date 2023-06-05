import React, { useState } from "react";
import {
    PlusOutlined,
    StepBackwardFilled,
    DeleteOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import "./styles.css";

const AddDeviceForm = ({ handleAddDevice }) => {
    const [newDevice, setNewDevice] = useState("");
    const [newDeviceType, setNewDeviceType] = useState("");
    const [newDeviceLocation, setNewDeviceLocation] = useState("");
    const [newDeviceBrand, setNewDeviceBrand] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [errorFields, setErrorFields] = useState([]);

    const handleChangeInput = (event) => {
        setNewDevice(event.target.value);
        setErrorFields((prevErrorFields) =>
            prevErrorFields.filter((field) => field !== "newDevice")
        );
    };

    const handleChangeTypeInput = (event) => {
        setNewDeviceType(event.target.value);
        setErrorFields((prevErrorFields) =>
            prevErrorFields.filter((field) => field !== "newDeviceType")
        );
    };

    const handleChangeLocationInput = (event) => {
        setNewDeviceLocation(event.target.value);
        setErrorFields((prevErrorFields) =>
            prevErrorFields.filter((field) => field !== "newDeviceLocation")
        );
    };

    const handleChangeBrandInput = (event) => {
        setNewDeviceBrand(event.target.value);
        setErrorFields((prevErrorFields) =>
            prevErrorFields.filter((field) => field !== "newDeviceBrand")
        );
    };

    const handleAddClick = () => {
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
            const device = {
                name: newDevice,
                type: newDeviceType,
                location: newDeviceLocation,
                brand: newDeviceBrand,
            };
            handleAddDevice(device);
            setNewDevice("");
            setNewDeviceType("");
            setNewDeviceLocation("");
            setNewDeviceBrand("");
        } else {
            setErrorFields(errorFields);
        }
    };

    const handleCancelClick = () => {
        setShowForm(false);
    };

    const handleGoBackClick = () => {
        setShowForm(true);

    };

    const handleClearClick = () => {
        setNewDevice("");
        setNewDeviceType("");
        setNewDeviceLocation("");
        setNewDeviceBrand("");
        setErrorFields([]);
    };

    if (!showForm) {
        return (
            <div>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    className="add-btn"
                    onClick={handleGoBackClick}
                >
                    Thêm mới
                </Button>
            </div>
        );
    }

    return (
        <div className="add-device-form">
            <div className="form-title">
                <label>THÊM THIẾT BỊ</label>
            </div>
            <div className="add-form">
                <div className="input-container">
                    <label className="label">Tên thiết bị:</label>
                    <input
                        type="text"
                        value={newDevice}
                        onChange={handleChangeInput}
                        placeholder="Tên thiết bị"
                        className={`input-ten ${errorFields.includes("newDevice") ? "error-input" : ""
                            }`}
                    />
                    <label className="label">Loại:</label>
                    <input
                        type="text"
                        value={newDeviceType}
                        onChange={handleChangeTypeInput}
                        placeholder="Loại"
                        className={`input-loai ${errorFields.includes("newDeviceType") ? "error-input" : ""
                            }`}
                    />
                </div>
                <div className="input-container">
                    <label className="label">Vị trí:</label>
                    <input
                        type="text"
                        value={newDeviceLocation}
                        onChange={handleChangeLocationInput}
                        placeholder="Vị trí"
                        className={`input-vitri ${errorFields.includes("newDeviceLocation") ? "error-input" : ""
                            }`}
                    />
                    <label className="label">Hãng:</label>
                    <input
                        type="text"
                        value={newDeviceBrand}
                        onChange={handleChangeBrandInput}
                        placeholder="Hãng"
                        className={`input-hang ${errorFields.includes("newDeviceBrand") ? "error-input" : ""
                            }`}
                    />
                </div>
                <div className="button-group">
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        className="add-btn"
                        onClick={handleAddClick}
                    >
                        Thêm mới
                    </Button>
                    <Button
                        type="primary"
                        icon={<StepBackwardFilled />}
                        className="add-btn"
                        onClick={handleCancelClick}
                    >
                        Quay lại
                    </Button>
                    <Button
                        type="primary"
                        icon={<DeleteOutlined />}
                        className="add-btn"
                        onClick={handleClearClick}
                    >
                        Xoá
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AddDeviceForm;
