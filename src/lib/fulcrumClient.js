import axios from 'axios';
import {FULCRUM} from '../constants';

/**
 * Fulcrum HTTP request helper
 */
export default axios.create({
  baseURL: FULCRUM.URL,
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-ApiToken': FULCRUM.TOKEN
  }
});