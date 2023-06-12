const ModalWindow = ({ enabled, url, onClose }) => {
  return (
    <>
      <div
        className={`z-10 ${
          enabled ? "opacity-100" : "opacity-0"
        } fixed inset-0 flex items-center justify-center bg-text backdrop-blur-sm bg-opacity-30`}
        onClick={onClose}
      >
        <div className="absolute top-0 right-0 m-4 text-white font-bold cursor-pointer">
          <span className="text-2xl text-[white]" onClick={onClose}>
            X
          </span>
        </div>

        <div className="flex justify-center p-sm">
          <img src={url} className="w-1/2 rounded-md" alt="Modal Image" />
        </div>
      </div>
    </>
  );
};
export default ModalWindow;
