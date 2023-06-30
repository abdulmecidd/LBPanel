const ModalWindow = ({ enabled, url, onClose, alt }) => {
  return (
    <>
      <div
        className={`z-10 ${
          enabled ? "opacity-100" : "opacity-0"
        } fixed inset-0 flex items-center justify-center bg-text backdrop-blur-sm bg-opacity-30`}
        onClick={onClose}
      >
        <div className="absolute top-0 right-0 m-4 text-white font-bold cursor-pointer">
          <span
            className="text-3xl text-[white] hover:text-[black] transition "
            onClick={onClose}
          >
            X
          </span>
        </div>

        <div className="xl:flex md:flex sm:flex-col gap-4 items-center justify-center p-sm">
          <img src={url} className="w-1/2 rounded-md" alt="Modal Image" />
          <div className="bg-[white] rounded-md font-main h-auto w-auto text-text">
            <div className="p-sm">
              <h1 className="font-bold text-4xl">{alt}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalWindow;
