// import PropTypes from 'prop-types';
import { Radio } from "@material-tailwind/react";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const SettingsModal = () => {
  const [activeTaxOn, setActiveTaxOn] = useState(true);
  const [activeTaxType, setActiveTaxType] = useState(false);
  return (
    <div>
      {/* Add Customer modal */}
      <dialog id="my_modal_1" className="modal text-gray-800">
        <div className="modal-box py-4 px-12">
          <div className="flex mb-3">
            <div className="w-1/4 absolute left-2 top-0">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="absolute left-2 top-2">
                  <MdKeyboardArrowLeft className="text-6xl" />
                </button>
              </form>
            </div>
            <div className="text-center w-full">
              <h3 className="font-bold text-2xl text-center">Settings</h3>
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col pt-6">
            <div className="flex flex-row w-full">
              <div
                className={`${
                  activeTaxOn
                    ? `w-1/2 custom-bg-color border-b-2 text-gray-700 text-xl font-semibold border-blue-600 text-center h-12 flex justify-center`
                    : "h-12 flex justify-center text-center w-1/2 bg-gray-200 border-b-2 text-gray-500 text-lg font-semibold border-gray-400"
                }`}
              >
                <button
                  className="py-auto"
                  onClick={() => {
                    setActiveTaxOn(true);
                    setActiveTaxType(false);
                  }}
                >
                  Tax On
                </button>
              </div>
              <div
                className={`${
                  activeTaxType
                    ? `w-1/2 custom-bg-color border-b-2 text-gray-700 text-xl font-semibold border-blue-600 text-center h-12 flex justify-center`
                    : "h-12 flex justify-center text-center w-1/2 bg-gray-200 border-b-2 text-gray-500 text-lg font-semibold border-gray-400"
                }`}
              >
                <button
                  className="py-auto"
                  onClick={() => {
                    setActiveTaxOn(false);
                    setActiveTaxType(true);
                  }}
                >
                  Tax Type
                </button>
              </div>
            </div>
            <div>
              {activeTaxOn && (
                <div className="flex flex-col py-6">
                  <Radio
                    name="type"
                    color="blue"
                    label="After Discount"
                    className="text-xl font-bold"
                    defaultChecked
                  />
                  <Radio
                    name="type"
                    color="blue"
                    label="Before Discount"
                    className="text-xl font-bold"
                  />
                </div>
              )}
              {activeTaxType && (
                <div className="flex flex-col py-6">
                  <Radio
                    name="type"
                    color="blue"
                    label="Sales TAX"
                    className="text-xl font-bold"
                    defaultChecked
                  />
                  <Radio
                    name="type"
                    color="blue"
                    label="VAT"
                    className="text-xl font-bold"
                  />
                </div>
              )}
            </div>
            <div className="w-full">
              <button className="w-full py-2 rounded-sm bg-blue-600 text-white font-bold text-center text-2xl">
                Update
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

SettingsModal.propTypes = {};

export default SettingsModal;
