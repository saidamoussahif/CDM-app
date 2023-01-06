import React from 'react';
import image1 from '../imgs/bank.png';
import Header from '../components/Header';
import Footer from '../components/Footer';





const Home = () => {
  return (
    <>
      <Header/>
      <div>
      <div>
                    {/* Remove class [ h-64 ] when adding a card block */}
                    {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                    {/* <div className="w-full h-screen "> */}
                      {/* Place your content here */}
                      {/* <img src="https://mdbootstrap.com/img/new/slides/041.jpg" class="w-full" alt="..." /> */}
                                        
            


                      <div className="flex flex-col justify-center px-6 container">
                    <div className="relative">
                        <img className="hidden sm:block w-full h-screen" src={image1} alt="sofa" />
                        <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                            <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">Range Comfort Sofas</p>
                        </div>
                    </div>
                </div>
 

                    
                    
                    
                    
                    {/* </div> */}
                </div>
      </div>

      <Footer/>
    </>
  )
}

export default Home
