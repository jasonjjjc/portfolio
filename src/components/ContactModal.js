import Link from 'next/link';
import Image from 'next/image';

export default function ContactModal() {
  return (
    <main className="flex flex-col flex-1 items-center overflow-y-auto text-xl">
      <header className="flex justify-around">
        <div className="flex flex-col m-5 justify-around pb-10">
          <Image src="/phone.png" alt="Profile Image" width={200} height={200} />
          <p>Web Developer</p>
          <p>London, UK</p>
        </div>
        <div className="flex flex-col m-5">
          <div>
            <p>4</p>
            <p>Projects Completed</p>
            <p>________________</p>
          </div>
          <div>
            <p>1288</p>
            <p>Codewars Score</p>
            <p>________________</p>
          </div>
          <div>
            <p>156</p>
            <p>Stack Overflow</p>
            <p>________________</p>
          </div>
        </div>
      </header>
      <article className="flex p-5">
        <p>I conquered the fashion industry for 10 years and now I code for fun and build useful tools for businesses around the world.</p>
      </article>
      <footer>
        <div className="flex flex-col lg:flex-row mb-5">ç
          <div className="flex justify-around">
            <Link href="tel:+1234567890">
              <div className="m-8">
                <Image src="/phone.png" alt="Phone" width={64} height={64} />
              </div>
            </Link>
            <Link href="mailto:your-email@example.com">
              <div className="m-8">
                <Image src="/email.png" alt="Email" width={64} height={64} />
              </div>
            </Link>
          </div>
          <div className="flex justify-around">
            <Link href="https://github.com/your-username">
              <div className="m-8">
                <Image src="/github-sign.png" alt="GitHub" width={64} height={64} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/your-username">
              <div className="m-8">
                <Image src="/linkedin.png" alt="LinkedIn" width={64} height={64} />
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
