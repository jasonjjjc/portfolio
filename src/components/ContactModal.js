export default function ContactModal() {
  return (
    <>
      {/* this is the top half of the modal */}
      <div className="flex justify-between">
        {/* this is the left half of the modal */}
        <div className="flex-col">
          <p>Image</p>
          <div className="flex-col">
            <p>Bella Bekanova</p>
            <p>Web Developer</p>
            <div className="flex-row">
              <p>London, UK</p>
            </div>
          </div>
        </div>
        {/* this is the right half of the modal */}
        <div>
          <div className="flex-col">
            <p>4</p>
            <p>Projects Completed</p>
            {/* <Image href="./line.png"/> */}
          </div>
          <div className="flex-col">
            <p>1288</p>
            <p>Codewars Score</p>
            {/* <Image href="./line.png"/> */}
          </div>
          <div className="flex-col">
            <p>156</p>
            <p>Stack Overflow</p>
            {/* <Image href="./line.png"/> */}
          </div>
        </div>
      </div>

      {/* this is the bottom half of the modal */}
      <div className="flex justify-center text-xl bg-white text-black p-4 m-4 shadow-sm">
        <div>
          <p>
            I conquered the fashion industry for 10 years and now I code for fun
            and build useful tools for businesses around the world.
          </p>
        </div>
        <div>
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
      </div>
    </>
  );
}
