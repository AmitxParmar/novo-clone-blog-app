import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ICreateCommunity {
  isOpen: boolean;
  closeModal: () => void;
  setIsOpen: (isOpen: boolean) => void;
  setCategory: (category: string) => void;
  setEmoji: (emoji: string) => void;
}

const CreateCommunity: React.FC<ICreateCommunity> = ({
  isOpen,
  closeModal,
  setIsOpen,
  setCategory,
  setEmoji,
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex w-full max-w-md transform flex-col overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-lg font-bold leading-6 tracking-wide"
                  >
                    Create Community{" "}
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col">
                    <label className="inline-flex">Enter Community name</label>
                    <input
                      type="text"
                      placeholder="Enter community name"
                      className="text-gray-500 inline-flex h-6 w-full rounded-none border border-black p-4 text-sm tracking-wide outline-none placeholder:text-gray"
                      onChange={(e) => setCategory(e.target.value)}
                    />
                    <label className="mt-3 inline-flex">Emoji</label>
                    <input
                      type="text"
                      placeholder="Enter community name"
                      className="text-gray-500 inline-flex h-6 w-full rounded-none border border-black p-4 text-sm tracking-wide outline-none placeholder:text-gray"
                      onChange={(e) => setEmoji(e.target.value)}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="bg-blue-100 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-500 mr-4 inline-flex justify-center rounded-md border border-transparent border-black px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-blue/50"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel{" "}
                    </button>
                    <button
                      type="button"
                      className="bg-blue-100 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-500 inline-flex justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-blue/50 "
                      onClick={closeModal}
                    >
                      Create
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreateCommunity;
