import LOGO from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className='mt-32'>
      <div className="container mx-auto flex justify-between">

        <div className="justify-items-start">
          <img
            src={LOGO}
            alt="Dev Stack"
            className="mt-5 h-[30px]"
          />

          <p className="my-5">
            Curated tools, technologies, and resources for developers building
            <br />
            modern software.
          </p>

          <ul className="my-5 flex justify-center space-x-6">
            <li>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-pink-500"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-pink-500"
              >
                Twitter
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-pink-500"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="my-5 space-y-3">
          <h2 className="text-1xl font-bold">
            PRODUCT
          </h2>

          <p>Home</p>
          <p>Technologies</p>
          <p>Projects</p>
        </div>

        <div className="my-5 space-y-3">
          <h2 className="text-1xl font-bold">
            COMPANY
          </h2>

          <p>About</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>

        <div className="my-5 space-y-3">
          <h2 className="text-1xl font-bold">
            LEGAL
          </h2>

          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

      </div>

      <div className="container mx-auto my-10 flex justify-between border-t pt-10">

        <p className="font-thin">
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex gap-5">
          <p>Privacy</p>
          <p>Terms</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
