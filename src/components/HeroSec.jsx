import kandrePic from "../images/Kandre.png";
import briefcase from "../icons/briefcase.svg";
import code from "../icons/code.svg";


export default function HeroSec() {
  return (
    <section className='px-6 md:px-20'>
      <div className="flex justify-between items-center w-full  bg-white relative">
        <span className="bg-bgGray text-sm px-3 py-2 font-[500] rounded-full">
          UI/UX Designer
        </span>

        <div className=" w-[120px] h-[120px]">
     
          <div className="absolute top-0 right-0 w-[100px] h-[100px] border border-bgGray rounded-full"></div>

       
          <div className="absolute top-[50px] right-[60px] w-[60px] h-[60px] border border-bgGray rounded-full"></div>
        </div>
      </div>



      <div className="flex justify-between">
         <div className="flex gap-5 flex-col relative">
            <h1 className="font-playfair text-6xl font-semibold">
            Hello, I'm Adewuyi
            <br />
            Quadri
            </h1>
            <div className="w-[80px] h-[80px] border border-bgGray absolute right-[10px] top-[50px] rotate-45">

            </div>
            <p className="text-3xl ">Creating Digital Experiences that Matter</p>
            <p className="text-lg text-gray">I design beautiful, intuitive, and functional user interfaces that <br />
            create meaningful connections between people and digital <br />
            products.</p>
        <div className="flex  gap-20">
                <button className="bg-black py-3 px-4 text-white  rounded-full">View My Work</button>
                <button className="flex items-center p-3 px-4 gap-2 bg-bgGray rounded-full ">Get in Touch <span><i className="fa-solid fa-right-long"></i></span></button>
        </div>
        <div>
        <div className="flex  gap-[150px] relative">
            <div className="flex items-center gap-2">
                <span className="w-[30px] h-[30px] flex items-center justify-center bg-bgGray rounded-full">
                <i className="fa-solid fa-briefcase"></i>
                </span>
                <div>
                    <h3>Experience</h3>
                    <p>2+ Years</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-[30px] h-[30px] flex items-center justify-center bg-bgGray rounded-full">
                  <img src={code} alt="" />
                </span>
                <div>
                    <h3>Industries </h3>
                    <p>7</p>
                </div>
          
        </div>
        <div className="w-[80px] h-[80px] border border-bgGray absolute left-0 top-[60px] rotate-12">

            </div>
    </div>
    </div>
    </div>
    
      <div className="lg:pr-24 relative">
        <div className="bg-gray-100 p-8 rounded-md shadow-lg">
          <div className="aspect-square overflow-hidden">
            <img 
              src={kandrePic} 
              alt="Formal portrait" 
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div 
        className="absolute top-[50%] left-[-100px] transform -translate-x-1/2 -translate-y-1/2 
                  w-32 h-32 rounded-full bg-black opacity-10  blur-xl z-[100]"
      />

        </div>
      </div>
    </div>
    </section>
  )
}
