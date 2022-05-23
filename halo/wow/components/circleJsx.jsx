import "./cirlceJsx.scss";

const Halo = ({ dashArray = 200 }) => {
  return (
    <svg
      class="btn-halo"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke-linecap="round"
        stroke-dasharray={`${dashArray} 283`}
        stroke-mitterlimit="0"
        transform="rotate(-90 ) translate(-100 0)"
      />
    </svg>
  );
};

export default Halo;
