import express, { Application } from 'express';

export class Config {
    init(app: Application) {
        app.use(express.json())
    }
}