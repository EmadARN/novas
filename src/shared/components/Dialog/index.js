'use client'
import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ dialogId, isOpen, setIsOpen, children, title = 'دیالوگ', description = '' }) => {
    const handleClose = () => setIsOpen(false);

    if (!isOpen) return null;

    return (
        <div
            data-dialog-backdrop={dialogId}
            className="fixed inset-0 z-80 h-full flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
            onClick={(e) => {
                if (e.target.dataset.dialogBackdrop === dialogId) handleClose();
            }}
        >
            <div
                data-dialog={dialogId}
                className="relative w-full max-w-3/4 rounded-lg bg-white shadow-lg max-h-1/2 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-start justify-between p-4 border-b border-slate-200">
                    <div>
                        <h5 className="text-xl font-medium text-slate-800">{title}</h5>
                        {description && <p className="text-sm text-slate-500">{description}</p>}
                    </div>
                    <button
                        className="h-8 w-8 rounded-lg text-slate-500 hover:bg-slate-100 active:bg-slate-200 flex items-center justify-center"
                        onClick={handleClose}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6">{children}</div>
            </div>
        </div>
    );
};

Dialog.propTypes = {
    dialogId: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    children: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Dialog;
// 'use client'
// import React from 'react';
// import PropTypes from 'prop-types';
//
// const Dialog = ({ dialogId, isOpen, setIsOpen, children, title = 'دیالوگ', description = '' }) => {
//     const handleClose = () => setIsOpen(false);
//
//     if (!isOpen) return null;
//
//     return (
//         <div
//             data-dialog-backdrop={dialogId}
//             className="fixed inset-0 z-80 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
//             onClick={(e) => {
//                 if (e.target.dataset.dialogBackdrop === dialogId) handleClose();
//             }}
//         >
//             <div
//                 data-dialog={dialogId}
//                 className="relative w-full max-w-[90%] rounded-lg bg-white shadow-lg max-h-[80%] overflow-y-auto"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 {/* Header */}
//                 <div className="flex items-start justify-between p-4 border-b border-slate-200">
//                     <div>
//                         <h5 className="text-xl font-medium text-slate-800">{title}</h5>
//                         {description && <p className="text-sm text-slate-500">{description}</p>}
//                     </div>
//                     <button
//                         className="h-8 w-8 rounded-lg text-slate-500 hover:bg-slate-100 active:bg-slate-200 flex items-center justify-center"
//                         onClick={handleClose}
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     </button>
//                 </div>
//
//                 {/* Body */}
//                 <div className="p-6">{children}</div>
//             </div>
//         </div>
//     );
// };
//
// Dialog.propTypes = {
//     dialogId: PropTypes.string.isRequired,
//     isOpen: PropTypes.bool.isRequired,
//     setIsOpen: PropTypes.func.isRequired,
//     children: PropTypes.node,
//     title: PropTypes.string,
//     description: PropTypes.string,
// };
//
// export default Dialog;
