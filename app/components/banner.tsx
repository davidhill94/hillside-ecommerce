interface BannerProps{
    bannerText: string
}

const Banner: React.FC<BannerProps> = ({ bannerText }) => {
    return ( 
        <div className="w-full h-12 bg-secondaryColor text-primaryText flex items-center justify-center">
            <h4 className="font-semibold">{bannerText}</h4>
        </div>
     );
}
 
export default Banner;