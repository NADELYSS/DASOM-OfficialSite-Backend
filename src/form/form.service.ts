import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { Form } from './schema/form.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import mongoose from "mongoose";

@Injectable()
export class FormService {
    constructor(@InjectModel(Form.name) private formModel: Model<Form>) {}

    // create : 새로운 Form 생성
    async create(createFormDto: CreateFormDto): Promise<Form> {
        const createdForm = new this.formModel({ data: createFormDto});
        return createdForm.save();
    }

    // findAll : 모든 Form 조회


    // findOne : id를 기준으로 특정 Form 조회


    // update : id를 기준으로 특정 Form 수정


    // remove : id를 기준으로 특정 Form 삭제

}