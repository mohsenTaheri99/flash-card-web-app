import bcrypt from "bcrypt";
const saltRounds = 10;
type checkPasswordProps = {
  password: string;
  hash: string;
};
export const checkPassword = async ({
  password,
  hash,
}: checkPasswordProps): Promise<boolean> => {
  try {
    console.log(hash, password);
    const match = await bcrypt.compare(password, hash);
    return match;
  } catch (err) {
    console.error(err);
    return false;
  }
};
export const gethash = async (password: string): Promise<string> => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (err) {
    console.error(err);
    return "";
  }
};
