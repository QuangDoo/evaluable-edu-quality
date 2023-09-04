import { NavLink } from "react-router-dom";
import { path } from "~/constants";

const Nav = () => {
  return (
    <div className="bg-white flex items-center justify-between shadow-md p-3">
      <NavLink
        to={path.home}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-primary-10" : ""
        }
      >
        Trang chủ
      </NavLink>
      <NavLink
        to={path.system}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-primary-10" : ""
        }
      >
        Hệ thống
      </NavLink>{" "}
      <NavLink
        to={path.schoolDatabase}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-primary-10" : ""
        }
      >
        CSDL TRƯỜNG
      </NavLink>{" "}
      <NavLink
        to={path.selfReview}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-primary-10" : ""
        }
      >
        THÔNG TIN TĐG
      </NavLink>{" "}
      <NavLink
        to={path.review}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-primary-10" : ""
        }
      >
        ĐÁNH GIÁ NGOÀI
      </NavLink>{" "}
      <NavLink
        to={path.report}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-primary-10" : ""
        }
      >
        BÁO CÁO
      </NavLink>{" "}
      <NavLink
        to={path.test}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-primary-10" : ""
        }
      >
        test
      </NavLink>{" "}
    </div>
  );
};

export default Nav;
