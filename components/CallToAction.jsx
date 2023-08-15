const CallToAction = () => {
    return (
      <div
          className="w-screen h-[90vh] md:h-[60vh]
          bg-[url('/cta.jpg')] bg-cover
          bg-no-repeat bg-center text-white
          "
      >
         <div className="flex justify-center flex-col gap-[24px]
              items-center h-full w-screen backdrop-brightness-[.4] text-center">
              
              <h2 className="font-bold text-[30px] font-montserrat">
                Download the app now.
              </h2>
              <p className="text-[18px]">Available on your favorite store. Start your premium experience now</p>
              <div className="flex gap-2 md:gap-[34px] mt-[30px] flex-col md:flex-row">
                  <button className="rounded-full bg-orange-600 py-[16px] px-[58.5px]">
                      Playstore
                  </button>
                  <button className="rounded-full border py-[16px] px-[58.5px]">
                      App Store
                  </button>
              </div>
         </div>
      </div>
    )
  }
  
  export default CallToAction