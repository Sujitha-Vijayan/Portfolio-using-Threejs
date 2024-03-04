import React,{Suspense, useRef,useState} from 'react'
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from '../components/Alert';
import { Canvas } from '@react-three/fiber';
import Loader from "../components/Loader";
import ContactButterfly from '../models/ContactButterfly';
const Contact = () => {

  const formRef=useRef();
  const [form, setForm]=useState({name:"",email:"",message:""});
  const [loading,setLoading]=useState(false);
  const {showAlert,alert,hideAlert}=useAlert();
 const [currentAnimation,setCurrentAnimation]= useState("idle")


  const handleChange=({target:{name,value}})=>{
    setForm((currForm)=>{
      return {...currForm,[name]:value};
    });
  };

  const handleFocus=()=>setCurrentAnimation("Flying");
  const handleBlur=()=>setCurrentAnimation("idle")
  const handleSubmit=(e)=>{
e.preventDefault();
setLoading(true);
setCurrentAnimation("Flying");

emailjs.send("service_d44863j","template_jqpt6xw",{from_name:form.name,to_name:"Sujitha",from_email:form.email,to_email:"sujithavijayan95@gmail.com",message:form.message,},"qXs4qsJQ-ph6BJgft"


).then(()=>{
  setLoading(false);
  showAlert({
    show:true,text:"Thank You for your message 😊 ",type:"success",
  });
  setTimeout(()=>
  {
    hideAlert(false);
    setCurrentAnimation("idle");
    setForm({
      name:"",email:"",message:"",
    })} ,3000);
  }).catch((error)=>{
    setLoading(false);
    setCurrentAnimation("idle");
    console.log(error);
    showAlert({
      show:true,text:"I didn't receive your message  🙂",type:"danger",
    });
  })

  };
  return (
<section className="relative flex lg:flex-row flex-col max-container">
  {alert.show && <Alert {...alert}/>}
  <div className="flex-1 min-w-[50%] flex flex-col ">
    <h1 class>Get in Touch</h1>
    <form ref={formRef}
    onSubmit={handleSubmit}
    className='w-full flex flex-col gap-7 mt-14' autoComplete='off'>
      <label className='text-black-500 font-semibold'>
        Name<input type='text' 
        name="name" className='input' placeholder='John' required value={form.name}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        />
      </label>
      <label className='text-black-500 font-semibold'>
        Email<input type='email' 
        name="email" className='input' placeholder='John@gmail.com' required value={form.email}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}/>
      </label>
      <label className='text-black-500 font-semibold'>
        Your Message<textarea  
        name="message" rows='4'cols='10' className='textarea' placeholder='Write your thoughts here' required value={form.message}onChange={handleChange}onFocus={handleFocus}onBlur={handleBlur}/>
      </label>
      <button type='submit' className='btn' disabled={loading}>{loading?"Sending....":"Submit"}</button>
    </form>
  </div>
  <div className="lg:w-1/2 w-full lg-h-auto md:h-[550px] h-[350px]">
  
  <Canvas 
    camera={{position:[0,0,5],fov:75,near:0.1,far:1000}}>
      <directionalLight position={[0,0,1]}intensity={2.5}/>
      <ambientLight intensity={1}/>
      <pointLight position={[5,10,0]}  intensity={2}/>
      <spotLight position={[10,10,10]} angle={0.15} penumbra={1} intensity={2}/>
      <Suspense fallback={<Loader/>}>
        <ContactButterfly
        currentAnimation={currentAnimation}
        position={[0.8,0.2,2]}
        rotation={[6.729,-1.3,0.2]}
        scale={[1,1,1]}
        />
      </Suspense>
    </Canvas>
  </div>
</section>  );
};

export default Contact;