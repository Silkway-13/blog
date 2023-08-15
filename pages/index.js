import Image from "next/image";
import { Inter } from "next/font/google";
import Alert from "react-bootstrap/Alert";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </div>
  );
}
