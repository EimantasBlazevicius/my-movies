import { Modal, Spinner } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { getIsLoadingSelector } from "../../../slice/selectors";

const ContentLoader = ({ children }: { children: React.ReactNode }) => {
  const isLoading = useSelector(getIsLoadingSelector);

  return (
    <>
      {isLoading && (
        <Modal
          closeOnOverlayClick={false}
          isOpen={true}
          onClose={() => console.log("modal closed")}
          isCentered
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="green.300"
            opacity={1}
            size="xl"
            position={"absolute"}
            top="50%"
            left="50%"
          />
        </Modal>
      )}
      {children}
    </>
  );
};

export default ContentLoader;
