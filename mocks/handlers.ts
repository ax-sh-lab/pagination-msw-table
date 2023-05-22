import { rest } from 'msw'
import { Book, Review } from './types'
import {handlersa} from './db'

export const handlers = handlersa;
