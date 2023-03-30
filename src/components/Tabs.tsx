import React, { type FC } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Tabs: FC = () => {
  return (
    <div className="mb-4 ">
      <div className="">
        <div className="block">
          <nav className='top-full left-0 flex h-1 w-full flex-col rounded bg-[#e0e0e0] content-[""]'>
            <Tab.Group>
              <Tab.List>
                <Tab>All Communities</Tab>
                <Tab className={`font-bold`}>Your Communities</Tab>
              </Tab.List>
              <Tab.Panels></Tab.Panels>
            </Tab.Group>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
