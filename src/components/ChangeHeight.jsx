import { motion } from "framer-motion";

const AnimatedBars = () => {
    const animationVariants = {
        animate: {
            height: ["91px", "120px", "100px", "91px"],
            transition: { duration: 3, repeat: 2, repeatType: "reverse" },
        },
    };

    return (
        <div
            className="w-[120px] h-[115px] mt-[38px] ml-[63px] border rounded-2xl flex bg-[#78819936]"
            style={{
                borderImageSource:
                    "linear-gradient(0deg, #000000, #000000), linear-gradient(270deg, #7687B5 0%, #333B4F 100%)",
                borderImageSlice: 1,
            }}
        >
            <motion.img
                src="Rectangle49.png"
                alt=""
                className="w-[14px] ml-[13px] rounded-[14px] mt-[11px]"
                variants={animationVariants}
                animate="animate"
            />
            <motion.img
                src="Rectangle50.png"
                alt=""
                className="w-[14px] ml-[13px] rounded-[14px] mt-[54px]"
                variants={{
                    animate: {
                        height: ["48px", "80px", "60px", "48px"],
                        transition: { duration: 3, repeat: 2, repeatType: "reverse" },
                    },
                }}
                animate="animate"
            />
            <motion.img
                src="Rectangle51.png"
                alt=""
                className="w-[14px] ml-[13px] rounded-[14px] mt-[35px]"
                variants={{
                    animate: {
                        height: ["67px", "100px", "85px", "67px"],
                        transition: { duration: 3, repeat: 2, repeatType: "reverse" },
                    },
                }}
                animate="animate"
            />
            <motion.img
                src="Rectangle52.png"
                alt=""
                className="w-[14px] ml-[13px] rounded-[14px] mt-[75px]"
                variants={{
                    animate: {
                        height: ["27px", "60px", "40px", "27px"],
                        transition: { duration: 3, repeat: 2, repeatType: "reverse" },
                    },
                }}
                animate="animate"
            />
        </div>
    );
};

export default AnimatedBars;