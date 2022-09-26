import { ArtistPageMore, HeartFilledIcon, PlayIcon, VerifiedIcon } from "../../Icons";
import React from "react"
export default function Box({ showAboutComp }) {
      const [showContent, setShowContent] = useState(false)

      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
      };
      useEffect(() => {
            if (showAboutComp) {
                  setTimeout(() => setShowContent(true), 150)
            }
      }, [showAboutComp])

      return (
            <div className="w-full h-full absolute bg-[rgba(0,0,0,0.5)]">
                  {showContent &&
                        <div className="flex justify-center h-full">
                              <div className="flex flex-col w-full justify-center bg">
                                    <div className="mx-auto bg-black max-w-[768px] overflow-y-auto overflow-x-hidden" style={{ maxWidth: '768px' }}>
                                          <div className="relative z-99">
                                                <button onClick={() => alert('s')} className="text-[#b3b3b3] z-99 absolute hover:bg-[rgba(0,0,0,.7)] cursor-pointer" style={{ right: '12px', top: '12px' }}>
                                                      <CloseComp size={22} />
                                                </button>
                                                <Slider {...settings}>
                                                      <div>
                                                            <img src="https://i.scdn.co/image/8b158c6e3f99141b60c53bac6525df3ea330d705" alt="" />
                                                      </div>
                                                      <div>
                                                            <img src="https://i.scdn.co/image/f405323bc7e9c2530146c8db70a1b912773e8aac" alt="" />
                                                      </div>
                                                      <div>
                                                            <img src="https://i.scdn.co/image/85525935dd640682ff7403c24621195c59ffbaea" alt="" />
                                                      </div>

                                                </Slider>

                                                <div className="bg-[#121212] min-h-[600px] artist-popup-banner">
                                                      lorem400
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  }
            </div>}
      )
}


