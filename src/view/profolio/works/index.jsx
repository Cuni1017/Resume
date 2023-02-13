import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="woocommerceStore">WooCommerceStore</Link>
        </li>
        <li>
          <Link to="basicComponents">BasicComponents</Link>
        </li>
      </ul>
    </div>
  );
};

export default Work;
