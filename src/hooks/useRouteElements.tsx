import { useRoutes } from "react-router-dom";
import { Layout } from "~/components";
import { path } from "~/constants";
import { HomePage, ReportPage } from "~/pages";

const useRouteElements = () => {
  const elements = useRoutes([
    {
      path: path.home,
      element: (
        <Layout>
          <HomePage />,
        </Layout>
      ),
    },
    {
      path: path.report,
      element: (
        <Layout>
          <ReportPage />
        </Layout>
      ),
    },
    {
      path: path.review,
      element: (
        <Layout>
          <ReportPage />
        </Layout>
      ),
    },
    {
      path: path.schoolDatabase,
      element: (
        <Layout>
          <ReportPage />
        </Layout>
      ),
    },
    {
      path: path.selfReview,
      element: (
        <Layout>
          <ReportPage />
        </Layout>
      ),
    },
    {
      path: path.system,
      element: (
        <Layout>
          <ReportPage />
        </Layout>
      ),
    },
  ]);

  return elements;
};

export default useRouteElements;
