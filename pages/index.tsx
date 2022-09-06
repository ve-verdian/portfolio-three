import type { NextPage } from "next";
import Profile from "../components/profile";
import ProjectPreview, {
  ProjectPreviewInterface,
} from "../components/project_preview";

const Home: NextPage = () => {
  const projectMetadataArray = [];

  projectMetadataArray.push({
    title: "Staff IT at RSIA Family",
    desc: "Since : September 2019 - Sekarang",
    linkUrl: "/data_analysis",
    image: "/FAMILY.png",
  });

  projectMetadataArray.push({
    title: "Help Desk at PT. Lawu Information Technology",
    desc: "Since : November 2016 - Desember 2018",
    linkUrl: "/sound_processing",
    image: "/LAWU.png",
  });

  projectMetadataArray.push({
    title: "Analisa Kredit at KSP Swamitra Anugrah Artha Abadi",
    desc: "Since : Oktober 2015 - Juni 2016",
    linkUrl: "/social_tracker",
    image: "/A3.png",
  });

  const projectPreviewElements = [];

  for (let i = 0; i < projectMetadataArray.length; i++) {
    const metaData = projectMetadataArray[i];
    const element = <ProjectPreview {...metaData} key={i} />;
    projectPreviewElements.push(element);
  }

  return (
    <div>
      <Profile />
      <div className="mt-4 flex flex-col gap-4">{projectPreviewElements}</div>
    </div>
  );
};

export default Home;
