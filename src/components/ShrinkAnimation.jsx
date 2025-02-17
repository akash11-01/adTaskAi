export default function AnimatedCard() {
    return (
        <div
            className="w-[352px] relative h-[597px] border rounded-2xl border-gray-500"
            style={{
                background: "linear-gradient(158.19deg, #0B0B0B 5.17%, #1D2333 98.61%)",
            }}
        >
            <img src="Ellipse5.png" alt="" className="absolute" />

            <div className="relative">
                {/* Floating Animated Icons with Pausing Effect */}
                <img
                    src="Vector(26).png"
                    alt=""
                    className="absolute ml-[35px] mt-[70px] w-6 h-6 animate-moveInwardWithPause1"
                />
                <img
                    src="Vector(26).png"
                    alt=""
                    className="absolute ml-[250px] mt-[20px] w-6 h-6 animate-moveInwardWithPause2"
                />
                <img
                    src="Vector(26).png"
                    alt=""
                    className="absolute ml-[30px] mt-[270px] w-6 h-6 animate-moveInwardWithPause3"
                />
                <img
                    src="Vector(26).png"
                    alt=""
                    className="absolute ml-[320px] mt-[170px] w-6 h-6 animate-moveInwardWithPause4"
                />
                <img
                    src="Vector(26).png"
                    alt=""
                    className="absolute ml-[240px] mt-[340px] w-6 h-6 animate-moveInwardWithPause5"
                />

                {/* Background Circles */}
                <img
                    src="Ellipse6.png"
                    alt=""
                    className="w-[392px] h-[392px] mt-[79px]"
                />
                <img
                    src="Ellipse7.png"
                    alt=""
                    className="w-[266px] h-[266px] mt-[-325px] ml-[50px]"
                />
                <img
                    src="Vector(12).png"
                    alt=""
                    className="w-[139.8px] h-[223.71px] mt-[-250px] ml-[120px]"
                />
            </div>

            <div className="ml-[29px] mt-[105px]">
                <p className="font-semibold text-[14px] mb-2">
                    Intelligent Agents to Optimize your Reach
                </p>
                <p className="font-[300] text-[12px]">
                    Scale and refine your marketing with AI-powered agents. They track
                    performance in real-time to
                    <br />
                    help you reach more customers efficiently.
                </p>
            </div>
        </div>
    );
}
