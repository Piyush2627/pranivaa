import OurProcessHeaderImage from "../assets/images/OurProcessHeroImage.png";

function OurProcessHero() {
  return (
    <>
      <div className="mt-21 p-8 md:p-16">
        <img
          src={OurProcessHeaderImage}
          alt="Process"
          className="rounded-2xl"
        />
      </div>
    </>
  );
}

export default OurProcessHero;
