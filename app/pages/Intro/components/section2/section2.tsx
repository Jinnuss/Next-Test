"use client";
import { useState } from "react";
import './section2.scss';
import { IoPersonCircleOutline } from "react-icons/io5";
export default function Section2() {
    const listTags = [
        {
            id: 0,
            type: 'All',
            active: true
        },
        {
            id: 1,
            type: 'Business Analyst',
            active: false
        },
        {
            id: 2,
            type: 'Backend Engineer',
            active: false
        },
        {
            id: 3,
            type: 'Data Analyst',
            active: false
        },
        {
            id: 4,
            type: 'Frontend Developer',
            active: false
        },
        {
            id: 5,
            type: 'Mobile Developer',
            active: false
        },
        {
            id: 6,
            type: 'Project Manager',
            active: false
        },
        {
            id: 7,
            type: 'Tester',
            active: false
        }
    ]
    const listEmployees = [
        {
            id: 1,
            email: 'employee1@gmail.com',
            type: 'Business Analyst'
        },
        {
            id: 2,
            email: 'employee2@gmail.com',
            type: 'Business Analyst'
        },
        {
            id: 3,
            email: 'employee3@gmail.com',
            type: 'Backend Engineer'
        },
        {
            id: 4,
            email: 'employee4@gmail.com',
            type: 'Backend Engineer'
        },
        {
            id: 5,
            email: 'employee5@gmail.com',
            type: 'Backend Engineer'
        },
        {
            id: 6,
            email: 'employee6@gmail.com',
            type: 'Backend Engineer'
        },
        {
            id: 7,
            email: 'employee7@gmail.com',
            type: 'Data Analyst'
        },
        {
            id: 8,
            email: 'employee8@gmail.com',
            type: 'Frontend Developer'
        },
        {
            id: 9,
            email: 'employee9@gmail.com',
            type: 'Frontend Developer'
        },
        {
            id: 10,
            email: 'employee10@gmail.com',
            type: 'Mobile Developer'
        },
        {
            id: 11,
            email: 'employee11@gmail.com',
            type: 'Project Manager'
        },
        {
            id: 12,
            email: 'employee12@gmail.com',
            type: 'Project Manager'
        },
        {
            id: 13,
            email: 'employee13@gmail.com',
            type: 'Project Manager'
        },
        {
            id: 14,
            email: 'employee14@gmail.com',
            type: 'Tester'
        },
        {
            id: 15,
            email: 'employee15@gmail.com',
            type: 'Tester'
        },
        {
            id: 16,
            email: 'employee16@gmail.com',
            type: 'Tester'
        },
    ]
    const [listUser, setListUser] = useState(listEmployees);
    const [tag, setTag] = useState('All');
    const [listTagss, setlistTagss] = useState(listTags);
    function handleClick(item) {
        setTag(item.type);
        listTags.map((itemNew) => {
            if (itemNew.type == item.type) {
                itemNew.active = true;
            }
            else {
                itemNew.active = false;
            }
        })
        setlistTagss(listTags);
        const newListEmployees = listEmployees.filter((itemNew) => itemNew.type === item.type);
        if (item.type === 'All') {
            setListUser(listEmployees);
        } else {
            setListUser(newListEmployees);
        }
    }
    return (
        <>
            <div className="Section2">
                <div className="py-[80px] px-[100px]">
                    <div className="flex justify-between">
                        {listTagss.map((item, index) => (
                            <>
                                <div className={item.active ? 'Section2__itemTags active' : 'Section2__itemTags'} onClick={() => handleClick(item)} key={index}>{item.type}</div>
                            </>
                        ))}
                    </div>
                    <div className="my-[30px] text-[24px] font-bold text-center">{tag}</div>
                    <div className="mt-[30px] Section2__ListUser grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {listUser.map((item, index) => (
                            <>
                                <div className="flex justify-center " key={index}>
                                    <div className="Section2__itemUser" key={index}> <IoPersonCircleOutline className="inline-block text-[30px]" /> {item.email}
                                    </div>
                                </div>
                            </>
                        )
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}