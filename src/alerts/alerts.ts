import toast from "react-hot-toast";

export const successNotify = (msg: string) => {
  toast.success(msg, {
    duration: 1500,
    position: "top-center",
  });
};

export const errorNotify = (msg: string) => {
  toast.error(msg, {
    duration: 1500,
    position: "top-center",
  });
};
