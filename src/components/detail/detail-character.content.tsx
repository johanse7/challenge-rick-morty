import { NotFoundResults } from "@/components";
import { getCharactersById } from "@/lib/services";
import { DetailInfo } from "./detail-info";

export const DetailCharacterContent = async (props: { id: string }) => {
  const { id } = props;

  const result = await getCharactersById(id);

  if (!result?.character) return <NotFoundResults />;

  return (
    <>
      <DetailInfo {...result.character} />
    </>
  );
};
