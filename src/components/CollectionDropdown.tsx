import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    useDisclosure
} from "@heroui/react";
import type { RecordData } from "../data";
import { ChevronDown, Disc } from "lucide-react";
import { motion } from "framer-motion";

interface CollectionDropdownProps {
    records: RecordData[];
    onSelect: (record: RecordData) => void;
    selectedRecord: RecordData;
}

const CollectionDropdown: React.FC<CollectionDropdownProps> = ({ records, onSelect, selectedRecord }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleSelect = (record: RecordData) => {
        onSelect(record);
        onOpenChange(); // Close modal
    };

    return (
        <div className="w-full block lg:hidden px-0">
            <Button
                onPress={onOpen}
                variant="faded"
                className="w-full justify-between h-20 border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all rounded-none group px-8"
                endContent={
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="text-primary w-5 h-5" />
                    </motion.div>
                }
            >
                <div className="flex items-center gap-4">
                    <div className="relative flex-none">
                        <div className="w-12 h-12 rounded-full border-2 border-primary/30 overflow-hidden bg-zinc-800">
                            <img
                                src={selectedRecord.coverImages[0]}
                                alt={selectedRecord.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-1 border border-primary/20">
                            <Disc className="w-3 h-3 text-primary animate-spin-slow" />
                        </div>
                    </div>
                    <div className="text-left">
                        <p className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.2em] mb-0.5">Selected Record</p>
                        <p className="text-sm font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                            {selectedRecord.title}
                        </p>
                    </div>
                </div>
            </Button>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="bottom"
                backdrop="blur"
                size="full"
                classNames={{
                    wrapper: "z-[9999]",
                    backdrop: "z-[9998] backdrop-blur-xl",
                    base: "bg-zinc-950/95 border-t border-white/10 m-0 rounded-t-[32px] h-full z-[9999]",
                    closeButton: "top-6 right-6 text-white hover:bg-white/10 transition-colors z-[10000]",
                }}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        },
                        exit: {
                            y: "100%",
                            opacity: 0,
                            transition: {
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        },
                    },
                }}
            >
                <ModalContent>
                    {() => (
                        <div className="h-full flex flex-col">
                            <ModalHeader className="flex flex-col gap-1 pt-12 pb-6 px-8 flex-none">
                                <h1 className="text-3xl font-black uppercase italic tracking-tighter text-white">Your Collection</h1>
                                <p className="text-xs text-zinc-500 font-bold uppercase tracking-[0.2em]">Pick a record to play</p>
                            </ModalHeader>
                            <ModalBody className="px-6 pb-10 overflow-y-auto flex-1 custom-scrollbar">
                                <div className="grid gap-3">
                                    {records.map((record) => (
                                        <motion.button
                                            key={record.id}
                                            whileTap={{ scale: 0.96 }}
                                            onClick={() => handleSelect(record)}
                                            className={`p-5 rounded-2xl flex items-center gap-5 text-left transition-all border ${selectedRecord.id === record.id
                                                ? "bg-primary/20 border-primary/50 shadow-lg ring-1 ring-primary/30"
                                                : "bg-white/5 border-white/5 hover:bg-white/10 active:bg-white/15"
                                                }`}
                                            style={selectedRecord.id === record.id ? { boxShadow: `0 0 30px ${record.color}26` } : {}}
                                        >
                                            <div className="relative flex-none">
                                                <div className="w-20 h-20 rounded-lg border border-white/10 overflow-hidden bg-zinc-800">
                                                    <img
                                                        src={record.coverImages[0]}
                                                        alt={record.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                {selectedRecord.id === record.id && (
                                                    <div className="absolute -top-3 -right-3 bg-primary rounded-full p-2 shadow-xl ring-4 ring-black">
                                                        <Disc className="w-4 h-4 text-black animate-spin-slow" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg font-black uppercase text-white tracking-tight mb-1 truncate">
                                                    {record.title}
                                                </h3>
                                                <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest truncate">
                                                    {record.artist}
                                                </p>
                                                <div
                                                    className="w-16 h-1 mt-4 rounded-full"
                                                    style={{ backgroundColor: record.color }}
                                                />
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </ModalBody>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default CollectionDropdown;
