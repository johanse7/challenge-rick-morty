import DetailPage from "@/app/detail/[id]/page";
// import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

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
describe("detail page", () => {
  // const props = { params: { id: "1" } };
  it("Should Have a character detail", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            character: {
              id: "1",
              name: "Rick Sanchez",
              gender: "Mrale",
              status: "Alive",
              species: "Human",
            },
          }),
      })
    );

    render(await DetailPage());

    // const titleElement = await screen.findByText(/Rick/i);
  });
});
