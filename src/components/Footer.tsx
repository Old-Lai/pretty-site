import logo_small from "@/assets/logo-small.svg";

export default function FooterNav() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="space-y-4 lg:text-lg">
          <img
            src={logo_small}
            alt="Pretty Beauty Salon"
            className="h-15 w-auto lg:h-[9rem]"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            at purus hendrerit, posuere quam tincidunt.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold lg:text-xl">Services</h3>
          <ul className="text-muted-foreground space-y-2 text-sm lg:text-lg">
            <li>Hair Styling</li>
            <li>Hair Coloring</li>
            <li>Nail Care</li>
            <li>Facial Treatments</li>
            <li>Waxing</li>
            <li>Makeup</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold lg:text-xl">Hours</h3>
          <ul className="text-muted-foreground space-y-2 text-sm lg:text-lg">
            <li>Monday - Friday: 9am - 8pm</li>
            <li>Saturday: 9am - 6pm</li>
            <li>Sunday: 10am - 5pm</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold lg:text-xl">Contact</h3>
          <ul className="text-muted-foreground space-y-2 text-sm lg:text-lg">
            <li>123 Beauty Lane, San Francisco, CA 94103</li>
            <li>(415) 555-0123</li>
            <li>info@prettysalon.com</li>
          </ul>
        </div>
      </div>
      <div className="text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Pretty Beauty Salon. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
