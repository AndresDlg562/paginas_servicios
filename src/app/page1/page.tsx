import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <NavBar />
      <div className="flex flex-col justify-center min-h-screen py-10 px-10 space-y-10">
        <div className="flex items-center space-x-4">
          <Image src="next.svg" alt="Product 1" width={200} height={200} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta nisi. Fusce magna arcu, scelerisque vel vulputate sed, ullamcorper et nibh. Maecenas id magna nec tortor hendrerit pellentesque. Duis enim justo, feugiat varius condimentum sed, ornare et est. Aenean sodales fermentum neque, id porta sapien vulputate laoreet.</p>
        </div>

        <div className="flex items-center space-x-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta nisi. Fusce magna arcu, scelerisque vel vulputate sed, ullamcorper et nibh. Maecenas id magna nec tortor hendrerit pellentesque. Duis enim justo, feugiat varius condimentum sed, ornare et est. Aenean sodales fermentum neque, id porta sapien vulputate laoreet.</p>
          <Image src="globe.svg" alt="Product 2" width={100} height={100} />
        </div>

        <div className="flex items-center space-x-4">
          <Image src="file.svg" alt="Product 3" width={100} height={100} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta nisi. Fusce magna arcu, scelerisque vel vulputate sed, ullamcorper et nibh. Maecenas id magna nec tortor hendrerit pellentesque. Duis enim justo, feugiat varius condimentum sed, ornare et est. Aenean sodales fermentum neque, id porta sapien vulputate laoreet.</p>
        </div>
      </div> 
    </div>
    
  );
}
