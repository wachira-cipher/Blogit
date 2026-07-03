import React from "react";
import SettingsLayout from "./SettingsLayout";
import { useAuth } from "../../../context/AuthContext";
import { deactivateAccount } from "../../../api/user.api";
import { toast } from "react-toastify";


// MODALS
import ChangePasswordModal from "./modals/ChangePasswordModal";
import ChangePhoneModal from "./modals/ChangePhoneModal";
import ChangeEmailModal from "./modals/ChangeEmailModal";
import AccountActivityModal from "./modals/AccountActivityModal";
import DeleteAccountModal from "./modals/DeleteAccountModal";

export default function SecuritySettings() {

    const { user } = useAuth();
    const { logout } = useAuth();

    const handleDeactivate = async () => {
        try {
            await deactivateAccount();

            toast.success("Account deactivated");

            logout();
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed");
        }
    };

    // =========================
    // FORMAT DATE SAFELY
    // =========================
    const formatDate = (dateString) => {
        if (!dateString) return "Never";

        const date = new Date(dateString);

        return date.toLocaleString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <SettingsLayout
            pageTitle="Security"
            pageSubtitle="Manage your settings on portal"
        >

            {/* SECURITY CARD */}
            <div className="card flex-fill mb-0">

                <div className="card-header">
                    <h4 className="fs-18 fw-bold">Security</h4>
                </div>

                <div className="card-body">

                    {/* PASSWORD */}
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">

                        <div className="d-flex align-items-center">
                            <span className="avatar avatar-lg border bg-light fs-24 me-2">
                                <i className="ti ti-eye-off text-gray-900 fs-18"></i>
                            </span>

                            <div>
                                <h5 className="fs-16 fw-medium mb-1">Password</h5>
                                <p className="fs-16">Last Changed   {formatDate(user?.passwordChangedAt)}</p>
                            </div>
                        </div>

                        <a
                            href="#!"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#change-password"
                        >
                            Change Password
                        </a>

                    </div>

                    {/* PHONE */}
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">

                        <div className="d-flex align-items-center">
                            <span className="avatar avatar-lg border bg-light fs-24 me-2">
                                <i className="ti ti-phone text-gray-900 fs-18"></i>
                            </span>

                            <div>
                                <h5 className="fs-16 fw-medium mb-1">
                                    Phone Number Verification
                                </h5>
                                <p className="fs-16">
                                    Verified Mobile Number : {user?.phone || "Not set"}
                                </p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <span className="fs-20 text-success me-3">
                                <i className="ti ti-circle-check-filled"></i>
                            </span>

                            <a
                                href="#!"
                                className="btn btn-primary mt-0"
                                data-bs-toggle="modal"
                                data-bs-target="#phone-verification"
                            >
                                Change
                            </a>

                            <a href="#!" className="btn btn-secondary ms-3">
                                Remove
                            </a>
                        </div>

                    </div>

                    {/* EMAIL */}
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">

                        <div className="d-flex align-items-center">
                            <span className="avatar avatar-lg border bg-light fs-24 me-2">
                                <i className="ti ti-mail text-gray-900 fs-18"></i>
                            </span>

                            <div>
                                <h5 className="fs-16 fw-medium mb-1">
                                    Email Verification
                                </h5>
                                <p className="fs-16">
                                    Verified Email :{user?.email || "Not set"}
                                </p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <span className="fs-20 text-success me-3">
                                <i className="ti ti-circle-check-filled"></i>
                            </span>

                            <a
                                href="#!"
                                className="btn btn-primary mt-0"
                                data-bs-toggle="modal"
                                data-bs-target="#email-verification"
                            >
                                Change
                            </a>

                            <a href="#!" className="btn btn-secondary ms-3">
                                Remove
                            </a>
                        </div>

                    </div>

                    {/* ACTIVITY */}
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">

                        <div className="d-flex align-items-center">
                            <span className="avatar avatar-lg border bg-light fs-24 me-2">
                                <i className="ti ti-activity text-gray-900 fs-18"></i>
                            </span>

                            <div>
                                <h5 className="fs-16 fw-medium mb-1">
                                    Account Activity
                                </h5>
                                <p className="fs-16">
                                    Manage activities associated with the account
                                </p>
                            </div>
                        </div>

                        <a
                            href="#!"
                            className="btn btn-primary mt-0"
                            data-bs-toggle="modal"
                            data-bs-target="#account-activity"
                        >
                            View
                        </a>

                    </div>

                    {/* DEACTIVATE */}
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">

                        <div className="d-flex align-items-center">
                            <span className="avatar avatar-lg border bg-light fs-24 me-2">
                                <i className="ti ti-ban text-gray-900 fs-18"></i>
                            </span>

                            <div>
                                <h5 className="fs-16 fw-medium mb-1">
                                    Deactivate Account
                                </h5>
                                <p className="fs-16">
                                    This will shutdown your account. Your account will be reactive when you sign in again
                                </p>
                            </div>
                        </div>

                        <button
                            className="btn btn-primary mt-0"
                            onClick={handleDeactivate}
                        >
                            Deactivate
                        </button>

                    </div>

                    {/* DELETE */}
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">

                        <div className="d-flex align-items-center">
                            <span className="avatar avatar-lg border bg-light fs-24 me-2">
                                <i className="ti ti-trash text-gray-900 fs-18"></i>
                            </span>

                            <div>
                                <h5 className="fs-16 fw-medium mb-1">
                                    Delete Account
                                </h5>
                                <p className="fs-16">
                                    Your account will be permanently deleted
                                </p>
                            </div>
                        </div>

                        <a
                            href="#!"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-account"
                        >
                            Delete
                        </a>

                    </div>

                </div>
            </div>

            {/* ✅ MODALS WIRED HERE */}
            <ChangePasswordModal />
            <ChangePhoneModal />
            <ChangeEmailModal />
            <AccountActivityModal />
            <DeleteAccountModal />

        </SettingsLayout>
    );
}