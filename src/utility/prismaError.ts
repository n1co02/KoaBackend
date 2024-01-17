import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library';
import log from './log';
import {MessageType} from '../types';

export async function handlePrismaError(error: unknown): Promise<boolean> {
  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P1000':
        log(
          'Authentication failed: Invalid database credentials: ',
          MessageType.Error,
          error.message,
        );
        return true;
      case 'P1001':
        log(
          'Database server unreachable. Check if the database server is running: ',
          MessageType.Error,
          error.message,
        );
        return true;
      case 'P1002':
        log(
          'Database server was reached but timed out. Please try again: ',
          MessageType.Error,
          error.message,
        );
        return true;
      case 'P1003':
        log('Specified database does not exist: ', MessageType.Error, error.message);
        return true;
      case 'P1008':
        log('Operation timed out: ', MessageType.Error, error.message);
        return true;
      case 'P1009':
        log('The database already exists: ', MessageType.Error, error.message);
        return true;
      case 'P1010':
        log('User was denied access to the database: ', MessageType.Error, error.message);
        return true;
      case 'P1011':
        log('Error opening a TLS connection: ', MessageType.Error, error.message);
        return true;
      case 'P1012':
        log('Schema error: ', MessageType.Error, error.message);
        return true;
      case 'P1013':
        log('Invalid database string: ', MessageType.Error, error.message);
        return true;
      case 'P1014':
        log('Underlying kind for model does not exist: ', MessageType.Error, error.message);
        return true;
      case 'P1015':
        log(
          'Schema using unsupported features for database version: ',
          MessageType.Error,
          error.message,
        );
        return true;
      case 'P1016':
        log('Incorrect number of parameters in raw query: ', MessageType.Error, error.message);
        return true;
      case 'P1017':
        log('Server closed the connection: ', MessageType.Error, error.message);
        return true;
      case 'P2000':
        log('Value too long for column: ', MessageType.Error, error.message);
        return true;

      case 'P2001':
        log('Record does not exist: ', MessageType.Error, error.message);
        return true;
      case 'P2002':
        log('Unique constraint failed: ', MessageType.Error, error.message);
        return true;
      case 'P2003':
        log('Foreign key constraint failed: ', MessageType.Error, error.message);
        return true;
      case 'P2004':
        log('Database constraint failed: ', MessageType.Error, error.message);
        return true;
      case 'P2005':
        log('Invalid value for field type: ', MessageType.Error, error.message);
        return true;
      case 'P2006':
        log('Provided value not valid: ', MessageType.Error, error.message);
        return true;
      case 'P2007':
        log('Data validation error: ', MessageType.Error, error.message);
        return true;
      case 'P2008':
        log('Failed to parse query: ', MessageType.Error, error.message);
        return true;
      case 'P2009':
        log('Failed to validate query: ', MessageType.Error, error.message);
        return true;
      case 'P2010':
        log('Raw query failed: ', MessageType.Error, error.message);
        return true;
      case 'P2011':
        log('Null constraint violation: ', MessageType.Error, error.message);
        return true;
      case 'P2012':
        log('Missing required value: ', MessageType.Error, error.message);
        return true;
      case 'P2013':
        log('Missing required argument: ', MessageType.Error, error.message);
        return true;
      case 'P2014':
        log('Relation violation: ', MessageType.Error, error.message);
        return true;
      case 'P2015':
        log('Related record not found: ', MessageType.Error, error.message);
        return true;
      case 'P2016':
        log('Query interpretation error: ', MessageType.Error, error.message);
        return true;
      case 'P2017':
        log('Unconnected relation records: ', MessageType.Error, error.message);
        return true;
      case 'P2018':
        log('Required connected records not found: ', MessageType.Error, error.message);
        return true;
      case 'P2019':
        log('Input error: ', MessageType.Error, error.message);
        return true;
      case 'P2020':
        log('Value out of range: ', MessageType.Error, error.message);
        return true;
      case 'P2021':
        log('Table does not exist: ', MessageType.Error, error.message);
        return true;
      case 'P2022':
        log('Column does not exist: ', MessageType.Error, error.message);
        return true;
      case 'P2023':
        log('Inconsistent column data: ', MessageType.Error, error.message);
        return true;
      case 'P2024':
        log('Timeout fetching connection from pool: ', MessageType.Error, error.message);
        return true;
      case 'P2025':
        log('Operation failed due to missing records: ', MessageType.Error, error.message);
        return true;
      case 'P2026':
        log('Unsupported feature by database provider: ', MessageType.Error, error.message);
        return true;
      case 'P2027':
        log('Multiple errors during query execution: ', MessageType.Error, error.message);
        return true;
      case 'P2028':
        log('Transaction API error: ', MessageType.Error, error.message);
        return true;
      case 'P2030':
        log('No fulltext index found for search: ', MessageType.Error, error.message);
        return true;
      case 'P2031':
        log('MongoDB server needs to be run as a replica set: ', MessageType.Error, error.message);
        return true;
      case 'P2033':
        log('Number does not fit into a 64 bit integer: ', MessageType.Error, error.message);
        return true;
      case 'P2034':
        log(
          'Transaction failed due to write conflict or deadlock: ',
          MessageType.Error,
          error.message,
        );
        return true;
      case 'P3000':
        log('Failed to create database: ', MessageType.Error, error.message);
        return true;
      case 'P3001':
        log('Migration with possible destructive changes: ', MessageType.Error, error.message);
        return true;
      case 'P3002':
        log('Migration rolled back: ', MessageType.Error, error.message);
        return true;
      case 'P3003':
        log('Migrations format changed: ', MessageType.Error, error.message);
        return true;
      case 'P3004':
        log('System database should not be altered: ', MessageType.Error, error.message);
        return true;
      case 'P3005':
        log('Non-empty database schema: ', MessageType.Error, error.message);
        return true;
      case 'P3006':
        log('Migration failed on shadow database: ', MessageType.Error, error.message);
        return true;
      case 'P3007':
        log('Preview features not allowed: ', MessageType.Error, error.message);
        return true;
      case 'P3008':
        log('Migration already applied: ', MessageType.Error, error.message);
        return true;
      case 'P3009':
        log('Failed migrations found: ', MessageType.Error, error.message);
        return true;
      case 'P3010':
        log('Migration name too long: ', MessageType.Error, error.message);
        return true;
      case 'P3011':
        log('Cannot roll back unapplied migration: ', MessageType.Error, error.message);
        return true;
      case 'P3012':
        log('Cannot roll back migration not in failed state: ', MessageType.Error, error.message);
        return true;
      case 'P3013':
        log('Datasource provider arrays not supported: ', MessageType.Error, error.message);
        return true;
      case 'P3014':
        log('Shadow database creation failed: ', MessageType.Error, error.message);
        return true;
      case 'P3015':
        log('Migration file not found: ', MessageType.Error, error.message);
        return true;
      case 'P3016':
        log('Fallback method for database reset failed: ', MessageType.Error, error.message);
        return true;
      case 'P3017':
        log('Migration could not be found: ', MessageType.Error, error.message);
        return true;
      case 'P3018':
        log('Failed migration blocking new migrations: ', MessageType.Error, error.message);
        return true;
      case 'P3019':
        log('Datasource provider mismatch: ', MessageType.Error, error.message);
        return true;
      case 'P3020':
        log('Shadow database creation disabled on Azure SQL: ', MessageType.Error, error.message);
        return true;
      case 'P3021':
        log('Foreign keys cannot be created: ', MessageType.Error, error.message);
        return true;
      case 'P3022':
        log('Direct execution of DDL statements disabled: ', MessageType.Error, error.message);
        return true;
      case 'P4000':
        log('Introspection operation failed: ', MessageType.Error, error.message);
        return true;
      case 'P4001':
        log('The introspected database was empty: ', MessageType.Error, error.message);
        return true;
      case 'P4002':
        log('Inconsistent schema in introspected database: ', MessageType.Error, error.message);
        return true;
      case 'P5000':
        log('Server could not understand the request: ', MessageType.Error, error.message);
        return true;
      case 'P5001':
        log('Request must be retried: ', MessageType.Error, error.message);
        return true;
      case 'P5002':
        log('Invalid datasource provided: ', MessageType.Error, error.message);
        return true;
      case 'P5003':
        log('Requested resource does not exist: ', MessageType.Error, error.message);
        return true;
      case 'P5004':
        log('Feature not yet implemented: ', MessageType.Error, error.message);
        return true;
      case 'P5005':
        log('Schema needs to be uploaded: ', MessageType.Error, error.message);
        return true;
      case 'P5006':
        log('Unknown server error: ', MessageType.Error, error.message);
        return true;
      case 'P5007':
        log('Unauthorized access: ', MessageType.Error, error.message);
        return true;
      case 'P5008':
        log('Usage limit exceeded, try again later: ', MessageType.Error, error.message);
        return true;
      case 'P5009':
        log('Request timed out: ', MessageType.Error, error.message);
        return true;
      case 'P5010':
        log('Cannot fetch data from service: ', MessageType.Error, error.message);
        return true;
      case 'P5011':
        log('Invalid request parameters: ', MessageType.Error, error.message);
        return true;
      case 'P5012':
        log('Unsupported engine version: ', MessageType.Error, error.message);
        return true;
      case 'P5013':
        log('Engine not started: healthcheck timeout: ', MessageType.Error, error.message);
        return true;
      case 'P5014':
        log('Unknown engine startup error: ', MessageType.Error, error.message);
        return true;
      case 'P5015':
        log('Interactive transaction error: ', MessageType.Error, error.message);
        return true;
      case 'P6000':
        log('Generic server error: ', MessageType.Error, error.message);
        return true;
      case 'P6001':
        log('Invalid datasource URL: ', MessageType.Error, error.message);
        return true;
      case 'P6002':
        log('Unauthorized: Invalid API Key: ', MessageType.Error, error.message);
        return true;
      case 'P6003':
        log('Plan limit reached: ', MessageType.Error, error.message);
        return true;
      case 'P6004':
        log('Query timeout exceeded: ', MessageType.Error, error.message);
        return true;
      case 'P6005':
        log('Invalid parameters supplied: ', MessageType.Error, error.message);
        return true;
      case 'P6006':
        log('Prisma version not supported by Accelerate: ', MessageType.Error, error.message);
        return true;
      case 'P6008':
        log('Connection error or engine start error: ', MessageType.Error, error.message);
        return true;
      case 'P6009':
        log('Response size limit exceeded: ', MessageType.Error, error.message);
        return true;
      default:
        log('An unknown error occurred: ', MessageType.Error, error.message);
        return true;
    }
  } else if (error instanceof PrismaClientUnknownRequestError) {
    log('Unknown request error: ', MessageType.Error, error.message);
    return true;
  } else if (error instanceof PrismaClientRustPanicError) {
    log('Rust panic error: ', MessageType.Error, error.message);
    return true;
  } else if (error instanceof PrismaClientInitializationError) {
    log('Initialization error: ', MessageType.Error, error.message);
    return true;
  } else if (error instanceof PrismaClientValidationError) {
    log('Validation error: ', MessageType.Error, error.message);
    return true;
  } else {
    return false;
  }
}
