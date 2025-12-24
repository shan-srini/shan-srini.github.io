import React from "react";
import { Card, CardBody } from "@heroui/react";
import type { RecordData } from "../data";
import { motion } from "framer-motion";

interface RecordSidebarProps {
    records: RecordData[];
    onSelect: (record: RecordData) => void;
    selectedId: string;
}

const RecordSidebar: React.FC<RecordSidebarProps> = ({ records, onSelect, selectedId }) => {
    return (
        <div className="flex flex-col gap-6 p-4 h-[calc(100vh-180px)]">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-2">Collection</h3>
            <div className="flex flex-col gap-5 pb-10">
                {records.map((record) => (
                    <motion.div
                        key={record.id}
                        whileHover={{ x: -10 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Card
                            isPressable
                            onPress={() => onSelect(record)}
                            className={`w-70 border-none bg-black/40 backdrop-blur-lg relative overflow-hidden ${selectedId === record.id ? "ring-2 ring-primary" : "hover:bg-white/5"
                                }`}
                            shadow="lg"
                        >
                            <CardBody className="p-0 flex flex-row items-center overflow-hidden">
                                <div className="w-20 h-20 relative z-10 flex-none overflow-hidden rounded-l-lg">
                                    <img
                                        src={record.coverImages[0]}
                                        alt={record.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 p-3 min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-tighter text-white truncate">
                                        {record.title}
                                    </p>
                                    <div
                                        className="w-full h-1 mt-2 rounded-full opacity-60"
                                        style={{ backgroundColor: record.color }}
                                    />
                                </div>

                                {/* Disk sticking out effect */}
                                <div className="absolute -right-0 top-2 w-16 h-16 rounded-full bg-black/80 vinyl-record -z-10 border border-white/5" />
                            </CardBody>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default RecordSidebar;
