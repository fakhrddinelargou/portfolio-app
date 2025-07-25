



const Section = ()=>{
return(
    <div className=" section w-screen h-[90vh] flex ">
<div className=" content w-[50%] h-[90vh] flex flex-col gap-5 pl-30 justify-center">

<h1 className="text-blue-950 font-bold text-8xl flex flex-col title ">Front-End <span className="text-blue-300 text-8xl">Developer</span></h1>
 
 

 <p className="font-medium typing">Building Responsive Web Apps.</p>
 
 <p className="font-medium ">  build responsive web applications using React, TailwindCSS, and modern JavaScript. </p>
</div>
<div className=" imgs w-[50%] h-[90vh]  flex  items-center justify-center">
<img src="../public/illustration.png" alt="illustration" className="w-[90%]" />
</div>
    </div>
)
}


export default Section