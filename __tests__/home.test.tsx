import Home from "@/app/page";
import { FilterParamsType, SearchParamsType } from "@/lib/types/params";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import mockRouter from "next-router-mock";

jest.mock("react", () => {
  const testCache = <T extends (...args: Array<unknown>) => unknown>(func: T) =>
    func;
  const originalModule = jest.requireActual("react");
  return {
    ...originalModule,
    cache: testCache,
  };
});
jest.mock("../src/components/home/filters", () => ({
  onClickClose: () => jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: () => jest.fn(),
      replace: () => jest.fn(),
    };
  },
  usePathname() {
    return "";
  },
  useSearchParams: () => {
    return {
      get: () => jest.fn(),
      set: () => jest.fn(),
    };
  },
}));

describe("Home", () => {
  mockRouter.push("/?status=Alive&species=Alien&gender=Male");
  it("Render home page", async () => {
    const props: SearchParamsType<FilterParamsType> = {
      searchParams: {
        status: "Alive",
        species: "Alien",
        gender: "Male",
        name: "rick",
      },
    };

    const homeResolved = await Home(props);

    const { container } = render(() => homeResolved);

    expect(container).toBeTruthy();
  });
});
