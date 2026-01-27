import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import Socials from "../socials/socials";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-light-grey">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="font-semibold mb-2">Shop</h3>
            <Link href="#">Link One</Link>
            <Link href="#">Link Two</Link>
            <Link href="#">Link Three</Link>
            <Link href="#">Link Four</Link>
          </FooterList>
          <FooterList>
            <h3 className="font-semibold mb-2">Shop</h3>
            <Link href="#">Link One</Link>
            <Link href="#">Link Two</Link>
            <Link href="#">Link Three</Link>
            <Link href="#">Link Four</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">Policy</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              hendrerit, lacus nec dignissim auctor, nulla erat ultrices urna,
              vel dictum nunc ante maximus eros. Nam hendrerit enim mauris, id
              finibus arcu vulputate et. Aliquam eget dignissim urna, vitae
              tincidunt lorem. Aenean vehicula lacus quis facilisis semper.
              Morbi pharetra eget mi.
            </p>
          </div>
          <FooterList>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <Socials />
          </FooterList>
        </div>
        <div className="flex flex-col items-center p-6">
          <Image
            src="/images/hillside_logo.png"
            alt="Hillside Logo"
            width={150}
            height={150}
          />
          <p>
            &copy; {new Date().getFullYear()} Hillside Prints. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
