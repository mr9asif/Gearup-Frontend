// "use client";

// import { useEffect } from "react";
// import { useForm } from "react-hook-form";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// import { useCreateCategory } from "../hooks/useCreateCategory";
// import { useUpdateCategory } from "../hooks/useUpdateCategory";
// import { Category } from "../types/category.type";

// interface CategoryModalProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   category: Category | null;
// }

// interface CategoryFormValues {
//   name: string;
//   description: string;
// }

// export default function CategoryModal({
//   open,
//   onOpenChange,
//   category,
// }: CategoryModalProps) {
//   const { mutate: createCategory, isPending: isCreating } =
//     useCreateCategory();

//   const { mutate: updateCategory, isPending: isUpdating } =
//     useUpdateCategory();

//   const {
//     register,
//     handleSubmit,
//     reset,
//   } = useForm<CategoryFormValues>({
//     defaultValues: {
//       name: "",
//       description: "",
//     },
//   });

//   useEffect(() => {
//     if (category) {
//       reset({
//         name: category.name,
//         description: category.description,
//       });
//     } else {
//       reset({
//         name: "",
//         description: "",
//       });
//     }
//   }, [category, reset]);

//   const onSubmit = (values: CategoryFormValues) => {
//     if (category) {
//       updateCategory(
//         {
//           id: category.id,
//           name: values.name,
//           description: values.description,
//         },
//         {
//           onSuccess: () => {
//             reset();
//             onOpenChange(false);
//           },
//         }
//       );
//     } else {
//       createCategory(values, {
//         onSuccess: () => {
//           reset();
//           onOpenChange(false);
//         },
//       });
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       onOpenChange={(value) => {
//         onOpenChange(value);

//         if (!value) {
//           reset();
//         }
//       }}
//     >
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle>
//             {category ? "Update Category" : "Add Category"}
//           </DialogTitle>
//         </DialogHeader>

//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="space-y-5"
//         >
//           <div className="space-y-2">
//             <label className="text-sm font-medium">
//               Category Name
//             </label>

//             <Input
//               placeholder="Enter category name"
//               {...register("name", {
//                 required: true,
//               })}
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm font-medium">
//               Description
//             </label>

//             <Textarea
//               rows={4}
//               placeholder="Enter category description"
//               {...register("description")}
//             />
//           </div>

//           <div className="flex justify-end gap-2">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => onOpenChange(false)}
//             >
//               Cancel
//             </Button>

//             <Button
//               type="submit"
//               disabled={isCreating || isUpdating}
//             >
//               {category
//                 ? isUpdating
//                   ? "Updating..."
//                   : "Update"
//                 : isCreating
//                   ? "Creating..."
//                   : "Create"}
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useCreateCategory } from "../hooks/useCreateCategory";
import { useUpdateCategory } from "../hooks/useUpdateCategory";
import { Category } from "../types/category.type";

interface CategoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: Category | null;
}

interface CategoryFormValues {
  name: string;
  description: string;
}

export default function CategoryModal({
  open,
  onOpenChange,
  category,
}: CategoryModalProps) {
  const createCategory = useCreateCategory();
  const updateCategory = useUpdateCategory();

  const { register, handleSubmit, reset } = useForm<CategoryFormValues>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (category) {
      reset({
        name: category.name,
        description: category.description,
      });
    } else {
      reset({
        name: "",
        description: "",
      });
    }
  }, [category, reset]);

  const onSubmit = (values: CategoryFormValues) => {
    console.log("Submitting:", values);
    if (category) {
      updateCategory.mutate(
        {
          id: category.id,
          name: values.name,
          description: values.description,
        },
        {
          onSuccess: () => {
            onOpenChange(false);
            reset();
          },
        },
      );
    } else {
      createCategory.mutate(values, {
        onSuccess: () => {
          onOpenChange(false);
          reset();
        },
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {category ? "Update Category" : "Add Category"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Category Name" {...register("name")} />

          <Textarea
            placeholder="Description"
            rows={4}
            {...register("description")}
          />

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={createCategory.isPending || updateCategory.isPending}
            >
              {category ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
