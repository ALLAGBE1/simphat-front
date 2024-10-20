
// const sizes = {
//     textxs: "text-[16px] font-medium lg:text-[13px]",
//     headingxs: "text-[16px] font-bold lg:text-[13px]",
//     headings: "text-[20px] font-bold lg:text-[17px]",
//     headingmd: "text-[24px] font-bold lg:text-[20px] md:text-[22px]",
//     headinglg: "text-[32px] font-extrabold lg:text-[27px] md:text-[30px] sm:text-[28px]",
// }

const Heading = ({  ...restProps }) => {
    const Component = "h6";

    return (
        <Component className={`text-[#ffffff] font-['Poppins'] `} {...restProps} >

        </Component>
    );
}

export { Heading };