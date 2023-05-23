import { useEffect, useState } from "react";
import CarCategory from "../CarCategory/CarCategory";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopByCategory = () => {

    const [categories, setCategories] = useState([])
    const [activeTab, setActiveTab] = useState("classic");

    useEffect(() => {
        fetch(`http://localhost:5000/allToys/${activeTab}`)
            .then(res => res.json())
            .then(data => setCategories(data))
        // .then(data => setCategories(data))
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <div>
                <h2 className="text-center font-bold text-5xl my-12">Shop By Category</h2>
                <Tabs>
                    <TabList>
                        <div>
                            <Tab onClick={() => handleTabClick('classic')}>Classic Car</Tab>
                            <Tab onClick={() => handleTabClick('classic')}>Modern Car</Tab>
                            <Tab onClick={() => handleTabClick('classic')}>Construction Car</Tab>
                        </div>
                    </TabList>

                    <TabPanel>

                    </TabPanel>

                    <TabPanel>

                    </TabPanel>

                    <TabPanel>

                    </TabPanel>
                </Tabs>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    categories.map(category => <CarCategory
                        key={category._id}
                        categories={category}
                    ></CarCategory>)
                }
            </div>
        </div>

    );
};

export default ShopByCategory;