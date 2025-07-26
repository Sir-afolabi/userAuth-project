import successImage from "../../assets/images/success-image.png";

export default function Success() {
  return (
    <div className="w-full flex flex-col justify-between items-center gap-1">
      <div className="w-full bg-[#EF498F24]">
        <img
          src={successImage}
          alt=""
          className="w-full object-contain h-full"
        />
      </div>

      <div className="pl-6 flex items-center justify-start w-full ">
        <p className="font-bold text-[44px] w-full flex items-center justify-start ">
          You are successfully registered!
        </p>
      </div>
    </div>
  );
}
