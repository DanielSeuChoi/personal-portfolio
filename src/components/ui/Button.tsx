'use client'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React, { ButtonHTMLAttributes, useState, forwardRef } from 'react'
import { FC } from 'react'
import { motion } from 'framer-motion'

export const buttonVariants = cva(
    ' inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900',
    {
        variants: {
            variant: {
                default:
                    'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
                destructive: 'text-white hover:bg-red-600 dark:hover:bg-red-600',
                outline:
                    'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 dark:border-slate-700',
                subtle:
                    'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
                ghost:
                    'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
                link: 'bg-transparent dark:bg-transparent font-bold underline-offset-4 hover:underline text-black-100 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
                round: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',

            },
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-9 px-2 rounded-md',
                lg: 'h-11 px-8 rounded-md',
                square: 'h-11 w-11 p-10',
                lground: 'h-11 w-11 py-4 px-2 rounded-full',

            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {

}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant, size, ...props }, ref) => {
        return (
            <motion.button
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }}
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}>
                {children}
            </motion.button>
        )
    }
)
Button.displayName = 'Button'

export default Button
