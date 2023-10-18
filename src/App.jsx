import { useState } from "react";
import { TimersProvider } from "./context/TimersContext";
import { AnimatePresence } from "framer-motion";

import AboutModal from "./components/Modal/AboutModal";
import Header from "./components/Header";
import ActiveTimersContainer from "./components/ActiveTimersContainer";
import BtnAddTimer from "./components/BtnAddTimer";
import FormAddTimer from "./components/FormAddTimer";
import ExpiredTimersContainer from "./components/ExpiredTimersContainer";

function App() {
  const [showAddTimer, setShowAddTimer] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);

  return (
    <TimersProvider>
      <div className="bg-blue-600 h-screen overflow-auto">
        {/* Modal */}
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {modalOpen && (
            <AboutModal modalOpen={modalOpen} handleClose={close}></AboutModal>
          )}
        </AnimatePresence>
        {/* App */}
        <div className="container mx-auto flex flex-col items-center gap-6 my-6">
          <Header setModalOpen={setModalOpen} />

          <ActiveTimersContainer />
          {showAddTimer && <FormAddTimer setShowAddTimer={setShowAddTimer} />}
          {!showAddTimer && <BtnAddTimer setShowAddTimer={setShowAddTimer} />}
          <ExpiredTimersContainer />
        </div>
      </div>
    </TimersProvider>
  );
}

export default App;
